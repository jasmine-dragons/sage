const config = {
  twilio: {
    accountSid: "AC6b22eb5e4573acdafcc46825d2e1b039", //process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID,
    apiKey: "SKbeb868145344c01d2da8a9832600bf16",
    apiSecret: "fAiMwd2U68APJ1GVEgQe1MkucbdDYZ3A",
    chatService: process.env.NEXT_PUBLIC_TWILIO_CHAT_SERVICE_SID,
    outgoingApplicationSid: process.env.NEXT_PUBLIC_TWILIO_TWIML_APP_SID,
    incomingAllow:
      process.env.NEXT_PUBLIC_TWILIO_ALLOW_INCOMING_CALLS === "true",
  },
};

export default { config };
