var receiverAddressObj;
var receiverNameObj;
var receiverPhoneObj;

window.onload = function() {	// ҳ�����֮��, ��ȡҳ���еĶ���
	receiverAddressObj = document.getElementById("receiverAddress");
	receiverNameObj = document.getElementById("receiverName");
	receiverPhoneObj = document.getElementById("receiverPhone");
};

function checkOnSubmit() {			// ��֤������
	var receiverAddress = checkReceiverAddress();
	var receiverName = checkReceiverName();
	var receiverPhone = checkReceiverPhone();
	if(receiverAddress && receiverName && receiverPhone){
		document.getElementById("orderForm").submit();
	}else{
	   return "";
	}
}

function checkReceiverAddress() {			// ��֤�ջ��ַ
	var value =receiverAddressObj.value;
	var msg = "";
	if (!value)
		msg = "�ջ��ַ������д";	
	receiverAddressMsg.innerHTML = msg;
	receiverAddressObj.parentNode.parentNode.style.color = msg == "" ? "black" : "red";
	return msg == "";
}

function checkReceiverName() {		// ��֤�ջ���
	var value =receiverNameObj.value;
	var msg = "";
	if (!value)
		msg = "�ջ��˱�����д";	
	receiverNameMsg.innerHTML = msg;
	receiverNameObj.parentNode.parentNode.style.color = msg == "" ? "black" : "red";
	return msg == "";
}

function checkReceiverPhone() {		// ��֤��ϵ��ʽ
	var regex =/^1[3,5,8]\d{9}$/;	//��13��15��18��ͷ���ֻ���
	var value =receiverPhoneObj.value;
	var msg = "";
	if (!value)
		msg = "��ϵ��ʽ������д";
	else if (!regex.test(value))
		msg = "�ֻ����벻�Ϸ���";
	receiverPhoneMsg.innerHTML = msg;
	receiverPhoneObj.parentNode.parentNode.style.color = msg == "" ? "black" : "red";
	return msg == "";
}
