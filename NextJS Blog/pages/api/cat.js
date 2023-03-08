import { fetchCatFacts } from '../../lib/fetchCatFacts'

export default async function handler(req, res) {
    try {
        const result = await fetchCatFacts();
        res.status(200).send({ result });
    } catch (err) {
        res.status(500).send({ error: 'failed to fetch data' });
    }
}