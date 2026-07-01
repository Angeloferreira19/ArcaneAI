import base64
import binascii
import hashlib
import os
import secrets


def hash_password(password: str) -> str:
    salt = os.urandom(16)
    iterations = 200_000
    derived_key = hashlib.pbkdf2_hmac(
        "sha256",
        password.encode("utf-8"),
        salt,
        iterations,
    )
    return (
        f"pbkdf2_sha256${iterations}$"
        f"{base64.b64encode(salt).decode('ascii')}$"
        f"{base64.b64encode(derived_key).decode('ascii')}"
    )


def verify_password(plain_password: str, hashed_password: str) -> bool:
    if not hashed_password or not hashed_password.startswith("pbkdf2_sha256$"):
        return False

    try:
        _, iterations_str, salt_b64, hash_b64 = hashed_password.split("$")
        iterations = int(iterations_str)
        salt = base64.b64decode(salt_b64.encode("ascii"))
        expected_hash = base64.b64decode(hash_b64.encode("ascii"))
        derived_key = hashlib.pbkdf2_hmac(
            "sha256",
            plain_password.encode("utf-8"),
            salt,
            iterations,
        )
        return secrets.compare_digest(derived_key, expected_hash)
    except (ValueError, TypeError, binascii.Error):
        return False