const db = require("../db/index");

exports.putArtist = async (req, res) => {
  const { id } = req.params;
  const { name, genre } = req.body;

  try {
    const {
      rows: [artist],
    } = await db.query(
      "UPDATE Artists SET name = $1, genre = $2 WHERE id = $3 RETURNING *",
      [name, genre, id]
    );

    if (!artist) {
      return res.status(404).json({ message: `artist ${id} does not exist` });
    }

    res.status(200).json(artist);
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
};
