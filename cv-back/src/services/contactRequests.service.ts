import ContactRequests from "../models/ContactRequests";

const contactRequestsService = {
  create: async (
    name: string,
    email: string,
    phone: string,
    message: string
  ) => {
    await ContactRequests.create({
      name,
      email,
      phone,
      message,
      date: Date.now(),
    });
  },
  getAll: async () => {
    return await ContactRequests.find({}).sort({ date: 'desc' }).exec();
  },
};

export default contactRequestsService;
