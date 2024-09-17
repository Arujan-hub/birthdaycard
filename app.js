fetch('birthdays.json')
    .then(response => response.json())
    .then(data => {
       
        const currentBirthday = data.currentBirthday;
        document.getElementById('current-birthday-name').textContent = currentBirthday.name;
        document.getElementById('current-birthday-date').textContent = currentBirthday.date;
        document.getElementById('current-profile-img').src = currentBirthday.image;

       
        const today = new Date();
        const todayDate = today.toISOString().split('T')[0];  

     
        const upcomingBirthdayList = document.getElementById('upcoming-birthday-list');
        const upcomingBirthdays = data.upcomingBirthdays.filter(birthday => {
            const birthdayDate = new Date(birthday.date);
            return birthdayDate >= today;  
        });

       
        upcomingBirthdays.forEach(upcomingBirthday => {
           
            console.log("Upcoming Birthday Data:", upcomingBirthday);

         
            if (upcomingBirthday.name && upcomingBirthday.date && upcomingBirthday.image) {
          
                const upcomingItem = document.createElement('div');
                upcomingItem.classList.add('upcoming-item');

           
                const img = document.createElement('img');
                img.classList.add('profile-img-small');
                img.src = upcomingBirthday.image;
                img.alt = 'Profile Picture';

              
                const infoDiv = document.createElement('div');
                infoDiv.classList.add('upcoming-info');

          
                const name = document.createElement('p');
                name.classList.add('name');
                name.textContent = upcomingBirthday.name;

             
                const date = document.createElement('p');
                date.classList.add('date');
                date.textContent = upcomingBirthday.date;

              
                infoDiv.appendChild(name);
                infoDiv.appendChild(date);

               
                upcomingItem.appendChild(img);
                upcomingItem.appendChild(infoDiv);

              
                upcomingBirthdayList.appendChild(upcomingItem);
            } else {
                console.error("Incomplete birthday data:", upcomingBirthday);
            }
        });
    })
    .catch(error => console.error('Error loading birthday data:', error));
