/* Returns true if the input string matches a valid email address, false otherwise. */
export function validEmail(email) {
    const re = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;

    return re.test(String(email).toLowerCase());
}