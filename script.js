document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("download-btn").addEventListener("click", function() {
        const webhookUrl = "https://discord.com/api/webhooks/1426232873236824186/0hOX5qBmhVFqR5H17uT57AjHdWO5cGoansEeMI6-6wPuS2KGxUoe8jep5tUGvd91UsF5"; 

        const data = {
            username: "Download",
            avatar_url: "https://cdn.discordapp.com/attachments/1339652974347161681/1339661175801253918/photo_2025-02-11_19-42-10.jpg?ex=67af8832&is=67ae36b2&hm=0fd125aeeab7cbce59e205e0accb2ba5c7d4e4ef2607a31adb1b232bba6ae875&",
            content: "A user **VRChat-ERP-Mode.zip** file downloaded! :inbox_tray:"
        };

        fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(response => console.log("Webhook gönderildi!"))
          .catch(error => console.error("Hata oluştu:", error));
    });
});
