const express = require('express');

const user = require('../controller/user.controller');
const files = require('../controller/file.controller');
const uploading = require('../middleware/upload.middleware');
const jwtMiddleware = require('../middleware/jwt.middleware');

const router = express.Router();
// user managing
router.post('/user/login', user.login);
router.post('/user/signup', user.create);
router.get('/user/manage', jwtMiddleware, user.findAll);
router.put('/user/update', jwtMiddleware, user.update);
router.delete('/user/delete', jwtMiddleware, user.delete);

// file uploading and downloading
router.post('/upload', jwtMiddleware, uploading.uploadFile, files.upload);
router.get('/find/files', jwtMiddleware, files.getUploadedFiles);
router.get('/download', jwtMiddleware, files.downloadFile);

module.exports = router;
