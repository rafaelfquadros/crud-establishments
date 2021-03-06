module.exports = ({ models: { usersModel } }) => {
	return {
		find: async ({ query = {}, options = {} }) => {
			return usersModel.find({ ...query }, options);
		},

		findById: async (user_id) => {
			return usersModel.findById(user_id);
		},

		create: async (data) => {
			return usersModel.create(data);
		},

		update: async (options = {}, query = {}) => {
			return usersModel.updateOne(options, query);
		},

		delete: async (query) => {
			return usersModel.deleteOne(query);
		},
	};
};
