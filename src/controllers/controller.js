import { createWorker } from "tesseract.js";
export const getIndexView = (req, res) => {
  res.render('index', {text: null, error: null});
}

export const handleImageConvert = async (req,res) => {
  const worker = await createWorker()
  const { path: imagePath } = req.file;
  if (!req.file) {
    res.render('index', { text: null, error: 'No file uploaded' });
    return;
  }

  res.render('index', { text: 'Parsing the file', error: null });
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize(imagePath);
  await worker.terminate();
  res.render('index', { text, error: null });
}
