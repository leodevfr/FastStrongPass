// Crée un tableau vide pour stocker les mots de passe
var passwords = [];

function generatePassword() {
	var length = parseInt(document.querySelector('input[name="length"]:checked').value);
	var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}:<>?[];,./|\\";
	var password = "";

	for (var i = 0; i < length; i++) {
		password += characters.charAt(Math.floor(Math.random() * characters.length));
	}

	// Vérifie si le tableau passwords contient déjà 10 éléments
	if (passwords.length < 20) {
		// Ajoute le mot de passe généré à la fin du tableau
		passwords.push(password);

		// Met à jour l'affichage des mots de passe générés
		var passwordList = document.getElementById("password-list");
		passwordList.innerHTML = "";
		for (var i = 0; i < passwords.length; i++) {
			passwordList.innerHTML += "<li>" + passwords[i] + "</li>";
		}
	}

	// Affiche le dernier mot de passe généré
	document.getElementById("password").innerHTML = password;
}

document.getElementById("generate-button").addEventListener("click", generatePassword);
