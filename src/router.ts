import { Router } from "express";
import { listCategories } from "./app/useCases/categories/listCategories";

export const router = Router();

// List categories
router.get("/categories", listCategories);

// Create category
router.post("/categories", (req, res) => {
  res.send("created");
});

// List products
router.get("/products", (req, res) => {
  res.send("OK");
});

// Create product
router.post("/products", (req, res) => {
  res.send("created");
});

// Get products by category
router.get("/categories/:categoryId/products", (req, res) => {
  res.send("ok");
});

// List orders
router.get("/orders", (req, res) => {
  res.send("OK");
});

// Create order
router.post("/orders", (req, res) => {
  res.send("created");
});

// Change order status
router.patch("/orders/:orderId", (req, res) => {
  res.send("updated");
});

// Delete/cancel order
router.delete("/orders/:orderId", (req, res) => {
  res.send("deleted");
});
