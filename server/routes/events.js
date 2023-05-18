import express from "express"
import {
    createEvent,
    getEvents,
    getUserEvents,
    likeEvent,
} from "../controllers/events.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();


// CREATE

router.post("/", verifyToken, createEvent);

// READ

router.get("/", verifyToken, getEvents);
router.get("/:userId/events", verifyToken, getUserEvents)

// UPDATE

router.patch("/:id/like", verifyToken, likeEvent);

export default router;