import express from 'express';

const router = express.Router();

router.post('/blog', limiter(), async (req, res) => {
    const email = req.body.title;
    const firstName = req.body.content;

    res.status(200).json({
        success: true,
        message: 'Please check your email for the link to activate your account.'
    });
});
