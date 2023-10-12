function AccountSubPage() {

    function deleteAccount() {
        //look into cognito
    }

    function changeEmail() {
        //look into cognito
    }

    function changePassword() {
        //look into cognito
    }

    return (<div className="space-y-2 text-center mt-12 mx-auto">
            <button className="rounded bg-red-700 hover:bg-red-600 hover:shadow-md text-semibold text-white p-1 px-4">Delete Account</button>
            <br></br>
            <button className="rounded hover:bg-vert hover:shadow-md text-semibold text-vert hover:text-white p-1 px-4">Change Email</button>
            <br></br>
            <button className="rounded hover:bg-vert hover:shadow-md text-semibold text-vert hover:text-white p-1 px-4">Change Password</button>
       </div>);
}

export default AccountSubPage;