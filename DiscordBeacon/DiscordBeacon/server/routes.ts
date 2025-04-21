import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to get server information
  app.get("/api/server-info", (_req, res) => {
    const serverInfo = {
      name: "Nebula Network",
      memberCount: 2000,
      channelCount: 20,
      customBots: 10,
      weeklyEvents: true,
      discordInviteLink: "https://discord.gg/your-invite-code"
    };
    
    res.json(serverInfo);
  });

  // API endpoint to submit contact form
  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: "Please provide name, email and message" 
      });
    }
    
    // In a real implementation, you would save this to a database
    // or send an email
    console.log("Contact form submission:", { name, email, message });
    
    res.json({ 
      success: true, 
      message: "Your message has been received. We'll get back to you soon!" 
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
