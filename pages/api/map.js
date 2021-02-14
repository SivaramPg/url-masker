import db from '../../utils/db';
import uniqueIdentifier from '../../utils/uniqueIdentifier';

export default async (req, res) => {
  try {
    if (req.method === 'POST') {
      const { url } = req.body;
      const identifier = await uniqueIdentifier();

      const mappingRef = db.collection('mapping');

      mappingRef.doc(identifier).set({ url });

      res.status(200).json({ identifier });
    } else {
      throw new Error('Not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || error });
  }
};
