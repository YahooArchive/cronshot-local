// cronshot-local
// ==============

/* Copyright  2014 Yahoo Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
 */

var fs = require('graceful-fs');

module.exports = function saveToLocal(obj, callback) {
    obj = obj || {};

    var options = obj.options || {},
        path = options.path,
        imageName = options.imageName,
        fullPath = path + imageName,
        pathExists = fs.existsSync(fullPath),
        writeStream = typeof fullPath === 'string' ? fs.createWriteStream(fullPath) : {
            error: true
        },
        content = obj.readStream || (pathExists && fs.createReadStream(fullPath)) || false,
        info = {
            'name': 'local'
        };

    writeStream.error = writeStream.error || options.error;

    if (!path) {
        callback(new Error('The path option was not passed'));
        return;
    } else if (!imageName) {
        callback(new Error('The imageName option was not passed'));
        return;
    }

    if (content) {
        if (!writeStream.error) {
            content.on('end', function(err) {
                writeStream.end();
                callback(err, info);
            });

            try {
                content.pipe(writeStream);
            } catch (e) {
                callback(e, info);
            }
        } else {
            callback(new Error('This path was not found: ' + fullPath));
        }
    } else {
        callback(new Error('A read stream was not passed'));
    }
};