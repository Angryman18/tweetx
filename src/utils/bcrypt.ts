import bcrypt from "bcrypt";

export const genPassword = async (password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) reject(err);
      bcrypt.hash(password, salt, function (err, hash) {
        if (err) reject(err);
        if (hash) resolve(hash);
      });
    });
  });
};
