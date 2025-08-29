import bcrypt from "bcryptjs";

export async function hashPassword(plainPassword) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(plainPassword, salt);
    return hashedPassword;
  } catch (error) {
    throw new Error("Произошла ошибка во время хэширования пароля: " + error.message);
  }
}

export async function isValidPassword(password, hash) {
  try {
    const passwordIsValid = await bcrypt.compare(password, hash);
    return passwordIsValid;
  } catch (error) {
    throw new Error("Произошла ошибка во время сравнения пароля и его хэша: " + error.message);
  }
}
