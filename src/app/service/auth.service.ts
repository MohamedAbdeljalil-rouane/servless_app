import {Injectable} from "@angular/core";
import {AngularFireAuth} from "@angular/fire/auth";
import {Observable} from "rxjs";


@Injectable({providedIn: "root"})

export class AuthService {

    user : Observable < any >;

    constructor(private firebaseAuth : AngularFireAuth) {
        this.user = firebaseAuth.authState
    }

    signup(email : string, password : string) {
        this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(user => {
            console.log("Registration success!", user);
        }).catch(err => {
            console.log("error: ", err.message);
        });
    }

    login(email : string, password : string) {
        this.firebaseAuth.signInWithEmailAndPassword(email, password).then(user => {
            console.log("user logged in!", user);
        }).catch(err => {
            console.log("error: ", err.message);
        });
    }

    logout() {
        this.firebaseAuth.signOut()
        .then(() => {
            console.log("User sign out successfully!");
        })
        .catch(err => {
            console.log("error: ", err.message);
        });
    }

}
