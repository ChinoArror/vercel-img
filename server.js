const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
// const port = 8080;
const port = process.env.PORT || 8080;

app.use(express.static('public'));

// 获取文件夹和图片信息
app.get('/api/files', (req, res) => {
    const baseDir = path.join(__dirname, 'public');
    fs.readdir(baseDir, { withFileTypes: true }, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to scan directory' });
        }
        const result = [];
        files.forEach(file => {
            if (file.isDirectory()) {
                result.push({
                    name: file.name,
                    images: []
                });
            }
        });
        res.json(result);
    });
});

// 获取指定文件夹的图片信息
app.get('/api/files/:folder(*)', (req, res) => {
    const folderPath = path.join(__dirname, 'public', req.params.folder);
    fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to scan directory' });
        }
        const result = [];
        files.forEach(file => {
            if (file.isDirectory()) {
                result.push({
                    name: file.name,
                    images: []
                });
            } else if (file.isFile() && file.name.match(/\.(jpg|jpeg|png|gif)$/i)) {
                result.push({
                    name: '',
                    images: [`${req.params.folder}/${file.name}`]
                });
            }
        });
        res.json(result);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});