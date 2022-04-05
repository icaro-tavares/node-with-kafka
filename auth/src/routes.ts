import { Router } from 'express';
import validate from 'validate.js';

const router = Router();

const isRequired = {
  presence: { allowEmpty: false },
};

router.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const constraints = {
      email: isRequired,
      password: isRequired,
      name: isRequired,
    };

    const errors = validate(req.body, constraints);

    if (errors) {
      return res.json(errors);
    }

    await req.producer.send({
      topic: 'topic-register',
      messages: [
        { value: JSON.stringify({ email, password, name }) }
      ],
    });

    return res.json({ message: 'registration successfully processed' });
  } catch (err) {
    return res.json({ error: err.message });
  }
});

export default router;
