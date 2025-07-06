 const moodData = {
      happy: {
        items: [
          { image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", text: "Smile! You look amazing today " },
          { image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", text: "Dance it out! Life is beautiful." },
          { image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659", text: "Happiness shared is happiness doubled!" }
        ],
        song: "https://www.youtube.com/watch?v=JGwWNGJdvx8" // Shape of You by Ed Sheeran
      },
      sad: {
        items: [
          { image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7", text: "It's okay to cry. You are strong " },
          { image: "https://images.unsplash.com/photo-1536528087222-ef43dd3bb3e3", text: "Everything heals with time " },
          { image: "https://images.unsplash.com/photo-1487956382131-3814d9d1b236", text: "Sending you virtual hugs " }
        ],
        song: "https://www.youtube.com/watch?v=RgKAFK5djSk" // See You Again
      },
      stressed: {
        items: [
          { image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", text: "Breathe in, breathe out... You got this!" },
          { image: "https://images.unsplash.com/photo-1502920917128-1aa500764b6a", text: "Take a small break. Refresh your mind." },
          { image: "https://images.unsplash.com/photo-1494173853739-c21f58b16055", text: "One step at a time is enough " }
        ],
        song: "https://www.youtube.com/watch?v=ZbZSe6N_BXs" // Happy by Pharrell
      },
      angry: {
        items: [
          { image: "https://images.unsplash.com/photo-1559599078-28e58991da05", text: "Take a deep breath. Let it go slowly." },
          { image: "https://images.unsplash.com/photo-1495616811223-4d98c6e80d5b", text: "Go for a walk and cool off " },
          { image: "https://images.unsplash.com/photo-1533118771841-ec0a0dfb3bd0", text: "Pause. Breathe. Reset. " }
        ],
        song: "https://www.youtube.com/watch?v=btPJPFnesV4" // Eye of the Tiger
      },
      motivated: {
        items: [
          { image: "https://images.unsplash.com/photo-1493244040629-496f6d136cc3", text: "You are unstoppable " },
          { image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2", text: "Focus. Hustle. Win." },
          { image: "https://images.unsplash.com/photo-1508780709619-79562169bc64", text: "Great things are coming your way!" }
        ],
        song: "https://www.youtube.com/watch?v=2vjPBrBU-TM" // Chandelier by Sia
      }
    };

    // Variable to track current audio
    let currentAudio = null;

    // Function to show mood content
    function showMood(mood) {
      const moodBoard = document.getElementById("moodboard");
      moodBoard.innerHTML = ""; // Clear previous mood cards

      // If music is playing, stop it
      if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
      }

      // Loop through images & create cards
      moodData[mood].items.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        const moodImg = document.createElement("img");
        moodImg.src = item.image + "?auto=format&fit=crop&w=500&q=80"; // Add quality params

        const moodDesc = document.createElement("div");
        moodDesc.className = "card-desc";
        moodDesc.textContent = item.text;

        card.appendChild(moodImg);
        card.appendChild(moodDesc);
        moodBoard.appendChild(card);
      });

      // Open song in new tab (or play if you have file)
      const userChoice = confirm("Do you want to listen to a song for this mood?");
      if (userChoice) {
        window.open(moodData[mood].song, "_blank");
      }
    }