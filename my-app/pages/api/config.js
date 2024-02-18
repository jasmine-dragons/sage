const config = {
  twilio: {
    accountSid: "AC6b22eb5e4573acdafcc46825d2e1b039", //process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID,
    apiKey: process.env.NEXT_PUBLIC_TWILIO_API_KEY,
    apiSecret: process.env.NEXT_PUBLIC_TWILIO_API_SECRET,
    chatService: process.env.NEXT_PUBLIC_TWILIO_CHAT_SERVICE_SID,
    outgoingApplicationSid: process.env.NEXT_PUBLIC_TWILIO_TWIML_APP_SID,
    incomingAllow:
      process.env.NEXT_PUBLIC_TWILIO_ALLOW_INCOMING_CALLS === "true",
  },
};

export default { config };
