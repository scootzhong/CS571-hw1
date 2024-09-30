function submitApplication(e) {
    e.preventDefault(); // You can ignore this; prevents the default form submission!

    // 获取选项列表
    let jobs = document.getElementsByName("job");

    // 获取用户选择的工作
    let user_checked_job = null; // 初始化变量
    for(let i = 0; i < jobs.length; i++) {
        if (jobs[i].checked) {
            user_checkd_job = jobs[i].value;
            break;
        }
    }

    //做提示
    window.alert("Thank you for applying to be a " + user_checkd_job + "!");
}