import express from "express";
import { WebSocketServer } from "ws";
import cors from "cors";

const app = express();
const PORT = 5173;

//  CORS, որպեսզի այլ origin-ներից API-ին կարողանան մուտք գործել
app.use(cors());

// Create HTTP server
const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// WebSocket սերվեր, որը աշխատում է նույն HTTP սերվերի վրա
const wss = new WebSocketServer({ server });

// Գործարկում ենք "connection" իրադարձությունը, երբ միանում է նոր WebSocket հաճախորդ
wss.on(
  "connection",
  (ws: {
    send: (arg0: string) => void;
    on: (arg0: string, arg1: () => void) => void;
  }) => {
    console.log("Client connected");

    // Ուղարկել հաղորդագրություն նոր երբ սերվերը միանում է
    ws.send(JSON.stringify({ message: "Connected to WebSocket server" }));

    // Երբ սերվերն անջատվում է, ցուցադրում ենք հաղորդագրություն
    ws.on("close", () => {
      console.log("Client disconnected");
    });
  }
);
