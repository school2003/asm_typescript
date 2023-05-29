import express from "express";
import { create, get, getAll, remove, update } from "../controllers/product.js";
import { checkPermission } from "../middlewares/checkPermision";
const router = express.Router();

router.get("/", getAll);
router.get("/:id", get);
router.post("/", create);
router.delete("/:id", remove);
router.patch("/:id", update);

export default router;
