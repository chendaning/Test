var emailObj;
var usernameObj;
var passwordObj;
var confirmObj;

var emailMsg;
var usernameMsg;
var passwordMsg;
var confirmMsg;

window.onload = function() {	// ҳ�����֮��, ��ȡҳ���еĶ���
	emailObj = document.getElementById("email");
	usernameObj = document.getElementById("username");
	passwordObj = document.getElementById("password");
	confirmObj = document.getElementById("repassword");

	emailMsg = document.getElementById("emailMsg");
	usernameMsg = document.getElementById("usernameMsg");
	passwordMsg = document.getElementById("passwordMsg");
	confirmMsg = document.getElementById("confirmMsg");
};

function checkForm() {			// ��֤������
	var bEmail = checkEmail();
	var bUsername = checkUsername();
	var bPassword = checkPassword();
	var bConfirm = checkConfirm();
	return bUsername && bPassword && bConfirm && bEmail ;	// return false��, �¼�����ȡ��
}

function checkEmail() {			// ��֤����
	var regex = /^[\w-]+@([\w-]+\.)+[a-zA-Z]{2,4}$/;
	var value =emailObj.value;
	var msg = "";
	if (!value)
		msg = "���������д��";
	else if (!regex.test(value))
		msg = "�����ʽ���Ϸ���";
	emailMsg.innerHTML = msg;
	emailObj.parentNode.parentNode.style.color = msg == "" ? "black" : "red";
	return msg == "";
}

function checkUsername() {		// ��֤�û���
	var regex = /^[a-zA-Z_]\w{0,9}$/;	// ��ĸ�����»���1��10λ, ���������ֿ�ͷ
	var value = usernameObj.value;// ��ȡusernameObj�е��ı�
	var msg = "";						// ������ʾ��Ϣ, Ĭ��Ϊ��
	if (!value)							// ����û���û��, ���˾���һ���ַ������Ե���true, û��Ļ�����null����""����false
		msg = "�û���������д��";			// �ı���ʾ��Ϣ
	else if (!regex.test(value))		// ����û�������ƥ��������ʽ����
		msg = "�û������Ϸ���";			// �ı���ʾ��Ϣ
	usernameMsg.innerHTML = msg;		// ����ʾ��Ϣ����SPAN
	usernameObj.parentNode.parentNode.style.color = msg == "" ? "black" : "red";	// ������Ϣ����ı�tr����ɫ
	return msg == "";					// �����ʾ��ϢΪ�������û����, ����true
}

function checkPassword() {		// ��֤����
	var regex = /^.{6,16}$/;			// �����ַ�, 6��16λ
	var value = passwordObj.value;
	var msg = "";
	if (!value)
		msg = "���������д��";
	else if (!regex.test(value))
		msg = "���벻�Ϸ���";
	passwordMsg.innerHTML = msg;
	passwordObj.parentNode.parentNode.style.color = msg == "" ? "black" : "red";
	return msg == "";
}

function checkConfirm() {		// ��֤ȷ������
	var passwordValue = passwordObj.value;
	var confirmValue = confirmObj.value;
	var msg = "";

    if(!confirmValue){
	    msg = "ȷ�����������д";
	}
	else	if (passwordValue != confirmValue){
		msg = "������뱣��һ��";
    }
	confirmMsg.innerHTML = msg;
	confirmObj.parentNode.parentNode.style.color = msg == "" ? "black" : "red";
	return msg == "";
}
