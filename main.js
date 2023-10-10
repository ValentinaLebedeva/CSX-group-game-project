// function Y/N
function BeginGame() {
    const play = confirm("Ready to play?");
    if (play) {
        fightMonster();
    } else {
        endThegame();
    }
};

//Game

function getRandomNumber(maxValue) {
    return (Math.floor(Math.random() * maxValue));
}

function fightMonster() {
    // Introduction messages and declaration of locations and weapons
    alert(`Wake up! Are you OK?`);
    const name = prompt("What's your name?");
    // if the user doesn't input a name or a hometown, we'll consider it as them wanting to end the game
    if (!name) {
        return (endThegame());
    }
    else {
        const hometown = prompt(`Hi ${name}, where do you come from?`);
        if (!hometown) {
            return (endThegame());
        }
        else {
            alert(`Wow! ${hometown} is so far away! You're going to have to travel through dangerous places...`);
            const locations = ['beach', 'castle', 'haunted house', 'forest'];
            const weapons = ['stake', 'gun', 'harpoon', 'ouija board'];


            // as long as we have locations to visit, we play
            while (locations.length > 0) {
                let chosenLocation = prompt(`Alright ${name}, you can't go back to ${hometown} quite yet, you will have to choose one of these locations to travel to first: ${locations}.`);
                // if the user input is an error or a location that isn't in the array, we let them know
                while (!locations.includes(chosenLocation) && chosenLocation) {
                    chosenLocation = prompt(`That's a bit too far! Please choose between these locations: ${locations}.`);
                }
                // if the user doesn't input anything, we consider that they want to end the game
                if (!chosenLocation) {
                    return (endThegame());
                }
                // we get rid of the chosen location in the array so that it doesn't suggest it again
                for (let i = 0; i < locations.length; i++) {
                    if (locations[i] === chosenLocation) {
                        locations.splice(i, 1);
                    }
                }

                // choice: castle
                if (chosenLocation === "castle") {

                    // vampire at full health = 1000 HP; user will have 5 tries to kill it
                    let vampireHealth = 1000;
                    let counter = 5;
                    alert(`Yeah sorry to disappoint you ${name} but this doesn't look like Versailles... There are so many bats in here... Uh... did you hear that?! It's a vampire!!`);
                    // entering the for loop for the 5 tries
                    for (let i = 0; i < 5; i++) {
                        // user gets to choose a weapon
                        let chosenWeapon = prompt(`The vampire's health is at ${vampireHealth} HP and you have ${counter} tries left. One of these weapons will hit harder than the others, so choose wisely: ${weapons}`);
                        // the stake will hit harder
                        if (chosenWeapon === 'stake') {
                            vampireHealth -= 500;
                        }
                        else if (chosenWeapon === 'gun' || chosenWeapon === 'harpoon' || chosenWeapon === 'ouija board') {
                            vampireHealth -= getRandomNumber(150);
                        }
                        else {
                            alert(`Um that's not a weapon I've given you, and you just wasted one of your tries...`);
                        }
                        // if the vampire is dead, the user wins and gets to pick a different location and we can set i to 5 to get out of the loop
                        if (vampireHealth <= 0) {
                            alert(`Phew!!! Good job ${name}! He's super dead! I would've totally helped you but I'm #teamEdward!`);
                            i = 5;
                        }
                        // the number of tries left is decremented
                        counter--;
                        if (counter === 0 && vampireHealth > 0) {
                            // if the vampire is still alive after the 5 tries, the user dies and it's game over
                            alert(`Uh oh... RIP ${name}, I would've totally helped you but I'm #teamEdward!`);
                            return (gameOver());
                        }
                    }
                }

                // adding Valentina's haunted house
                /* location haunted house */
                if (chosenLocation === "haunted house") {
                    let ghostHealth = 1000;
                    alert(`Everybody loves a good spook in October! ${name} I doubt you can handle it!`);
                    let weaponOfChoice = prompt(`Look at this old mirror! The reflection has just moved! I'm pretty sure now would be a good time to choose between ${weapons}. Choose wisely to lower his health of ${ghostHealth}. You have 5 tries!`);
                    for (let i = 0; i < 4; i++) {
                        if (weaponOfChoice === 'ouija board') {
                            ghostHealth -= 500;
                            if (ghostHealth > 0) {
                                weaponOfChoice = prompt(`Better luck with other weapon? And the ghost's health is now at ${ghostHealth}! Let me know now if you want to change weapons between ${weapons}`);
                            }
                        }
                        else if (weaponOfChoice === 'gun' || weaponOfChoice === 'harpoon' || weaponOfChoice === 'stake') {
                            ghostHealth -= 150;

                            if (ghostHealth >= 500) {
                                weaponOfChoice = prompt(`Grrrrr. The ghost is still alive. Ha-ha Alive? Mmmm... I mean the ghost's health is at ${ghostHealth}, but if I were you I'd probably choose again between ${weapons}`);
                            }
                            else if (ghostHealth > 0 && ghostHealth < 500) {
                                weaponOfChoice = prompt(`AAAAAAAAAAAAAAAA! Maybe he only want to talk? Come on! I am messing with you - pick another weapon. You can choose between ${weapons}.`);
                            }
                        }
                        else {
                            weaponOfChoice = prompt(`Um that's not one of the weapons I have given you, and you just lost 1 try... choose again between ${weapons}`)
                        }
                    }
                    if (ghostHealth > 0) {
                        alert(`Uh oh... RIP ${name}, I guess you're joining the spooky season on other side`);
                        return (gameOver());
                    }
                    else if (ghostHealth <= 0) {
                        alert(`Phew!!! Good job ${name}! He finally could cross and find his peace!`);
                    }
                }



                //choice: beach
                if (chosenLocation === "beach") {
                    let seaSerpentHealth = 1000;
                    let count = 5;

                    alert("Oh no " + name + " You tried to swim and kicked a giant sea serpent in the face... Good luck!");

                    //moves into the for loop and fight sequence

                    for (let i = 0; i < 5; i++) {

                        //picks a weapon from the weapons variable
                        let chosenWeapon = prompt("Luckily you brought some weapons with you.. which will you choose?" + weapons + ". You have " + count + " chances to win.");

                        //added in getRandomNumber function, that generates a random number between 0 and the given paramater


                        //deals damage based on the weapon chosen
                        if (chosenWeapon === "harpoon") {
                            seaSerpentHealth -= getRandomNumber(999);
                        }

                        else if (chosenWeapon === "gun" || chosenWeapon === "stake") {
                            seaSerpentHealth -= getRandomNumber(250);
                        }

                        else if (chosenWeapon === "ouija board") {
                            seaSerpentHealth -= 1;
                        }

                        else {
                            chosenWeapon = prompt(`That's not a weapon! Please choose one of these: ${weapons}`);
                        }

                        //if the serpent has zero health, you win and counter goes to 5
                        if (seaSerpentHealth <= 0) {
                            alert("Wow, you survived! Good job " + name + ".");
                            i = 5;
                        }

                        // another alert to say what the health is after fighting. not sure if this works.
                        if (seaSerpentHealth > 0 && seaSerpentHealth <= 999) {
                            alert("Nice! His health is now at " + seaSerpentHealth + ". But he's even angrier. Which weapon will you choose now?")
                        }

                        //decreases count so the player can see how many turns left they have
                        count--;

                        //if the counter runs out and monster still has health, they lose.
                        if (count === 0 && seaSerpentHealth > 0) {
                            alert("You lost :(")
                            return gameOver()
                        }
                    }
                }

                /* forest! */
                if (chosenLocation === 'forest') {
                    // deleted the splice because it exists outside of the locations now
                    let bigfootHealth = 1000;
                    let userHealth = 500;
                    alert("Wow the forest is so dark and deep... I think we're lost? What's that sound???");
                    const forestChoice = ['fight', 'run', 'hide', 'talk'];
                    let forestChosen = prompt(`Holy shit it's Bigfoot! AAAAAHHHHHH. Are you going to ${forestChoice}?`)
                    // added a for loop for 4 options: fight, run, hide and talk
                    for (let i = 0; i < 4; i++) {
                        // splicing options after each suggestion so that the user can't use it again
                        for (let k = 0; k < 4; k++) {
                            if (forestChoice[k] === forestChosen) {
                                forestChoice.splice(k, 1);
                            }
                        }
                        if (forestChosen === 'fight') {
                            let forestWeapon = prompt(`Choose your ${weapons} then!`)
                            // changed index i to j for clarity
                            for (let j = 0; j < 4; j++) {
                                if (userHealth === 400) {
                                    alert("You're gushing blood!")
                                }
                                else if (userHealth === 300) {
                                    alert("The blood! It's everywhere!")
                                }
                                else if (userHealth === 200) {
                                    alert("You're bleeding out! Don't follow the light!")
                                }
                                if (forestWeapon === 'stake') {
                                    forestWeapon = prompt(`You tried to stab Bigfoot, but then Bigfoot ripped off your arm! More ${weapons}?`)
                                    userHealth = userHealth - 100;
                                }
                                else if (forestWeapon === 'gun') {
                                    forestWeapon = prompt(`You shot at Bigfoot, but Bigfoot dodged the bullet, and then threw you into a tree! What other ${weapons} do you want now?`)
                                    userHealth = userHealth - 100;
                                }
                                else if (forestWeapon === 'harpoon') {
                                    forestWeapon = prompt(`Bigfoot ducked and your harpoon missed, and then Bigfoot bit your leg off! I think you can still reach the ${weapons}.`)
                                    userHealth = userHealth - 100;
                                }
                                else if (forestWeapon === 'ouija board') {
                                    forestWeapon = prompt(`Bigfoot sighed, and said 'I wish ghosts were real. But only death is real. Go ahead with your ${weapons}'`)
                                }
                            }

                            forestChosen = prompt(`Well I guess these weapons aren't much use against Bigfoot... Maybe instead we should ${forestChoice}?`)
                        }
                        else if (forestChosen === 'run') {
                            forestChosen = prompt(`You ran as fast as you could, but you got lost and ran right into Bigfoot. What do you want to try next? ${forestChoice}`)
                        }
                        else if (forestChosen === 'hide') {
                            forestChosen = prompt(`You hid in a shrub, but Bigfoot pulled you right out of it. Now let's ${forestChoice}?`)
                        }
                        else if (forestChosen === 'talk') {
                            // incremented i to 5 so that we exit the loop when choosing "talk"
                            alert(`You mumbled and cried a bit, and you asked Bigfoot for help. She said, 'Even I get lost in these woods sometimes, ${name}.' She fed you some nuts, healed all your wounds, bathed you in the stream, and introduced you to her children. Then sent you to continue your journey back to ${hometown} with a basket of berries.`)
                            i = 5;
                        }
                    }
                }


            }
            // after all of the locations have been spliced off of the array, the array length should be at 0, and the user wins the game
            if (locations.length === 0) {
                return (alert(`Congrats ${name}!! You made it back to ${hometown}!`));
            }
        }
    }

}



// used when the user either isn't "ready to start" or doesn't want to "try again", or if the user input is null
function endThegame() {
    return (alert("Thank you! Good luck in your own adventure"));
}


// used when the user dies
function gameOver() {
    const play = confirm("Game over! Try again?");
    if (play) {
        fightMonster();
    }
    else {
        endThegame();
    }
}

BeginGame();