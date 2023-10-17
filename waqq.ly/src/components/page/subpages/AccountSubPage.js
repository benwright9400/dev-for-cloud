import { Auth } from "aws-amplify";
import { useState } from "react";

function AccountSubPage() {
    const [oldPassword, setOldPassword] = useState("");  
    const [newPassword, setNewPassword] = useState("");    


    function deleteAccount() {
        //look into cognito
        Auth.deleteUser().then((res) => {
            console.log(res);
            alert("account deleted, signing out user");
        });
    }

    function changePassword() {
        //look into cognito
        Auth.currentAuthenticatedUser().then((user) => {
            console.log(user);
            Auth.changePassword(user, oldPassword, newPassword).then((res) => {
                console.log(res);
                
                if(res === "SUCCESS") {
                    alert("password changed successfully");
                }
            }).catch((e) => {
                alert(e.message);
            });
        });
    }

    return (<div className="space-y-2 text-center mt-12 mx-auto">
            <button onClick={deleteAccount} className="rounded bg-red-700 hover:bg-red-600 hover:shadow-md text-semibold text-white p-1 px-4">Delete Account</button>
            <br></br>
            <p>Password:</p>
            <br></br>
            <input className="border-2" placeholder="old password" type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)}  />
            <br></br>
            <input className="border-2" placeholder="new password" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}  />
            <br></br>
            <button onClick={changePassword} className="rounded hover:bg-vert hover:shadow-md text-semibold text-vert hover:text-white p-1 px-4">Change Password</button>
       </div>);
}

export default AccountSubPage;