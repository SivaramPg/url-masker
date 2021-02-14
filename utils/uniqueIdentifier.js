import db from './db';
import randomString from './randomString';

export default async function uniqueIdentifier(id = null) {
  const identifier = id || randomString();
  const mapping = await db.collection('mapping').doc(identifier).get();
  if (!mapping.data()) {
    return identifier;
  } else {
    return uniqueIdentifier();
  }
}
