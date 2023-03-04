export default function handler(req, res) {
    try {
        res.status(200).json({ name: 'Jakub', surName: 'Kaminski', age: 25, department: 'IT' });
    } catch (err) {
        res.status(500).send({ error: 'failed to fetch data' });
    }
}