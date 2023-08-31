import db from '../../utils/db';

export const config = { runtime: 'edge' };

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const {
        query: { id },
      } = req;

      if (id && id.length === 5) {
        const mapping = await db.collection('mapping').doc(id).get();
        const data = mapping.data();

        if (data) {
          return res.redirect(data.url, 307);
        } else {
          return res.status(404).json({ error: 'Not found' });
        }
      }
    } else {
      return res.status(404).json({ error: 'Not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || error });
  }
}
