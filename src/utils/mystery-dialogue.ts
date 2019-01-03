import { Injectable } from '@angular/core';

export class MysteryDialogue {
  cook = [
    "You want to know about me?  Well, there is not much to say.  Some people say I'm a bit nosy, but I just like to help people.  I'd be more concerned about the doctor myself.  She must be taking the death of the blacksmith quite hard.  She always seemed to be quite fond of him.",
    "Now I'm not saying that the doctor does not treat all her patients with the utmost care, but she seemed particulary fixated on saving the blacksmith.  I am sure she would have tried anything to save him. She was working on an experimental new drug that would save his life, or so she said. I do not know if she got a chance to give it to him. I really hate it for her, but I guess thats how it is sometimes.  People die.",
    "The handyman and the blacksmith were close.  Probably because they both worked with their hands I guess.  They would often be the last to leave the campfire.  I would often hear their banter well into the night. I would often stay up with them to serve them drinks and listen to their stories.  Never a dull moment with those two.",
    "The blacksmith recently purchased a swell candlestick from the merchant.  How much did he pay?  I could not say since I was not there, but the merchant seemed pleased with the deal, so I figure it was for a tidy sum.",
    "I do not think the ranger talks too much to anyone except the doctor honestly.  Despite having more success than most at getting her to talk, I have only managed a few conversations with her during our travels.  I would not think she would do anything to harm a client though.  Bad for business and all that.",
    "Do I think the perpetrator could have used the candlestick?  I guess so, but the blacksmith typically kept it in his room, so it would be hard to get at unless someone went into his tent.",
    "I think the dagger was definitely used as part of the murder.  I mean, did you see his body?  It looked like someone sliced him right through his chest!  It was so gory I could not bring myself to get too close to his body.  The poor soul.  The ranger would know more about weaponry.  Did you try talking to her about the murder weapon yet?",
    "My kitchen knives?!?  No way!  I mean, they are much more suited to chopping.  You say chopping and slashing are sort of the same motion?  Gross! I am done talking about this.",
    "What pipe are you talking about?  Oh, those pipes are mainly used for pitching our tents.  They would be sturdy enough to be used as a blunt weapon now that I think about it, so, I guess, maybe?",
    "The only one with access to the syringe would be the doctor.  Why would she want to do him harm?  He was her patient, you know?",
    "The handyman keeps his wrench on his toolbelt which he takes off only when he goes to sleep.  I just don't see the handyman whacking the blacksmith over the head with his wrench though."
  ];
  doctor = [
    "The cook is a bit of a blabbermouth, but she has a warm heart.  She is squeamish around blood, considering she is a cook, so I do most of the butchering of any game we come across.  I would say we are on good terms, but she was constantly trying to pair together the blacksmith and myself like some kind of newlywed game.",
    "While I do see patients, I specialize in research and development.  Despite being a so-called pioneer in the field of medicine, I was never able to cure the blacksmith of his condition...and now he is dead.",
    "The handyman cared greatly for the blacksmith.  He would eagerly volunteer his services to the blacksmith under the guise of wanting to learn more about the trade, but I long suspected he only did this to ease the blacksmith's burden.",
    "I do not know much of the merchant that travels with us.  Frankly, I prefer to forage my own supplies, so I do not have much reason to speak with him except to exchange pleasantries when needed.",
    "Despite what some of the others may tell you, the ranger is a fine elf.  She offers to escort me through the forest when I forage for ingredients.  She used to charge me a fee for her services, but now she joins me of her own volition.  I cannot say I dislike the extra company.",
    "If the candlestick is pure gold like the merchant told the blacksmith, then it would have likely dented upon impact.  I do not think anyone hit him with the candlestick.",
    "The cut down the blacksmith's chest could quite possibly be made from a dagger, but it would take considerable strength.  Daggers are more suited to stabbing than slicing.",
    "All the kitchenware is communal in our camp.  While a kitchen knife could have been used, only the cook and myself tend to be in possession of the knives.",
    "A pipe would roughly match the damage to the back of the blacksmith's head.  Out of the wound to his head and the one to his chest, the blunt trama to his head would be the most lethal according to my initial findings.",
    "The syringe?  What about the syringe?  I thought we were discussing the potential cause of death of the blacksmith?",
    "The handyman always keeps his wrench on his toolbelt and the handyman would never have harmed the blacksmith."
  ];
  handyman = [
    "She makes a mean vegetable soup.  Too squeamish around blood to cause no harm to anybody.",
    "A fine woman to be sure.  Though they would never admit it, the blacksmith and the doctor were smitten with each other.  She was always inventing new medicines to ease his pain to no avail.  Damn shame.  He was a good man, the blacksmith.",
    "Me?  I work with my hands.  I fix stuff that needs fixing and don't go causing any trouble for anyone.",
    "Bit of a greedy one, but I guess all good merchants are a lil greedy.  I think he'd rather have gold in his hands moreso than blood.",
    "Shadowy character for sure, but she has kept us safe up until this point.  I reckon she was not expecting she would need to protect us from ourselves.",
    "From personal experience, err, not in this situation mind you, I know that if you hit a man with a candlestick, its not going to maintain its form.",
    "A dagger is only good for stabbing.  Not trying to toot my own horn, but a strong man like myself could drag a knife through a fella if they had to, but it'd be a jagged mess for sure.",
    "A butcher's knife is used for cutting meat, so I suppose it would do the job of cutting up a man.  When I was in the military, I saw a surgeon use one as a makeshift scalpel, but I guess you did not ask for a story from an old man.",
    "If I had to guess what happened to the back of the blacksmith's head, the pipe would be the weapon that would make the most sense out of the weapons you are showing me. If I am being truthful, I have seen worse bruises on the back of my head before and I came out no worse for wear. Maybe the murderer knocked him out with the pipe and finished him off afterwards with some sort of knife?",
    "The doctor always keeps her syringe in her briefcase when not in use.  The blacksmith usually received injections daily to keep his strength up, though I suspect the benefits were beginning to wane over time. She has been trying to come up with a brand new drug.  I know she was close, but I do not know if she finished it or not.",
    "No way.  The wrench has been with me the whole time.  Went to sleep with it, woke up with it."
  ];
  merchant = [
    "Steady with her knife as any I have come across.  I always enjoy conversing wither her since most of these other characters are not much for conversation.",
    "Knowledgable enough, but bit of an oddball.  I cannot tell you how many times I saw the poor blacksmith at the wrong end of another experimental injection from the doctor.",
    "Boisterous guy.  Strong as an ox and honest to a fault.  Can't say I have ever caught him in a lie and we have traveled together many a time. Saw the blacksmith and the handyman a lot together. Seemed to be good friends like they knew each other previously.",
    "The greatest trader in all the lands!  If you need supplies, rare or otherwise, I am the man to see.  I also do appraisals for a nominal fee.",
    "Don't trust her.  You cannot trust an elf that spends much of her time to herself.  If anyone did in the blacksmith, it would be her.  Why, she is an elf carrying dangerous weapons!  What more evidence do you need?",
    "My candlestick really was pure gold.  I am not a dishonest merchant. Did you ever consider that the blow to his head did not come from a weapon?  Think of all the possibilities before you go asking around about my merchandise being involved in some murder!",
    "An ordinary dagger.  Sharpened to a point.  Seems like this dagger has a serrated edge good for a faster; albeit, rougher cut. You said the chest wound was clean though, right? I am no expert, but it does not sound like this dagger would have been suitable for that sort of wound.",
    "A standard butcher knife.  Good for cutting meats cleanly and efficiently.  Probably not great as a weapon I would imagine.",
    "Why are you showing me a pipe?  A pipe is a pipe.  Could you slap someone across the head with one?  Sure.",
    "Only one person has a syringe in this group, the doctor.  And she only ever used it on the blacksmith as far as I know.  She was always trying to cure him with her latest concoctions.  He'd usually see the Doctor to take his injections right before bed.",
    "Sorry, I do not have any wrenches in stock.  If you need one, best to speak to the handyman.  I am sure he would let you borrow his."
  ];
  ranger = [
    "She talks far too much.  Seems to think if she keeps talking at me, she will win me over.  Has not worked yet.",
    "I feel for her.  She tried so desperately to cure the blacksmith.  Her resolve resonated with me, so I started accompanying her in her search for the ingredients she needed.  Seeing how she fought for him, its tragic that it ends like this.  Last we ventured into the forest, she seemed excited at finding the ingredients she needed for her latest drug.  She just knew it would work.",
    "I do not speak to the handyman.  Seems like the honest sort from what others say.",
    "A racist dwarf.  Cannot say I am entirely surprised considering most of them are.  Would not be surprised if he thought I murdered the blacksmith myself.  Why?  Because I am an elf.  In his defense, he would never do something if he did not see the profit in it.  Not much for anyone her to gain from killing a sickly blacksmith.",
    "Making my living by guarding caravans and travelers is what I do. I have killed many bandits and brigands in my time, so I know what it takes to kill a person.  Just between us, the chest wound is strange. It does not appear like the assailant intended to kill him.  The wound is quite shallow, so I doubt the blacksmith could have bled out. I do not know what to make of it.",
    "Assuming the blacksmith's candlestick is pure gold like the merchant claims, it would not hold up well to being used as a weapon.",
    "The slashing wound on the victim was clean, precise even.  I do not think the dagger could accomplish such a cut with its serrated edge.",
    "The kitchen knife could cut cleanly if someone had enough experience with it I suppose.  It would not be a job for an amateur.  The curious thing is, the cut across his chest does not seem especially lethal.",
    "If anything, the wound on the back of the blacksmith's head was caused by the pipe.  Judging by the swelling, I would say the blow to the head came before the others. A blow of this magnitude may have been enough to knock him out. I do not use blunt weaponry, but perhaps the handyman would know more.  He seems to be the sort to have been in a few brawls in his day.",
    "The doctor is the only one to carry a syringe.  If I use poisons, I dip my arrows in them.  The blacksmith did receive daily injections from the doctor, so marks on his arms are to be expected. The syringe is how she administered all of the blacksmith's medications.",
    "The shape of the wound on the back of the victim's head does not seem to match with the thickness of the wrench if I am being perfectly honest."
  ];
  candlestick = [
    "Talk about slap-stick comedy.",
    "Talk about slap-stick comedy.",
    "Talk about slap-stick comedy.",
    "Talk about slap-stick comedy.",
    "Talk about slap-stick comedy.",
    "Talk about slap-stick comedy.",
    "Talk about slap-stick comedy.",
    "Talk about slap-stick comedy.",
    "Talk about slap-stick comedy.",
    "Talk about slap-stick comedy.",
    "Talk about slap-stick comedy."
  ];
  dagger = [
    "Bring my beloved Dagger to me!",
    "Bring my beloved Dagger to me!",
    "Bring my beloved Dagger to me!",
    "Bring my beloved Dagger to me!",
    "Bring my beloved Dagger to me!",
    "Bring my beloved Dagger to me!",
    "Bring my beloved Dagger to me!",
    "Bring my beloved Dagger to me!",
    "Bring my beloved Dagger to me!",
    "Bring my beloved Dagger to me!",
    "Bring my beloved Dagger to me!"
  ];
  kitchenKnife = [
    "Cut to the chase already.",
    "Cut to the chase already.",
    "Cut to the chase already.",
    "Cut to the chase already.",
    "Cut to the chase already.",
    "Cut to the chase already.",
    "Cut to the chase already.",
    "Cut to the chase already.",
    "Cut to the chase already.",
    "Cut to the chase already.",
    "Cut to the chase already."
  ];
  pipe = [
    "Communication between man and metal: a pipe dream.",
    "Communication between man and metal: a pipe dream.",
    "Communication between man and metal: a pipe dream.",
    "Communication between man and metal: a pipe dream.",
    "Communication between man and metal: a pipe dream.",
    "Communication between man and metal: a pipe dream.",
    "Communication between man and metal: a pipe dream.",
    "Communication between man and metal: a pipe dream.",
    "Communication between man and metal: a pipe dream.",
    "Communication between man and metal: a pipe dream.",
    "Communication between man and metal: a pipe dream."
  ];
  syringe = [
    "You know, nothing rhymes with orange.  I feel like syringe could make a little effort to be more inclusive.",
    "You know, nothing rhymes with orange.  I feel like syringe could make a little effort to be more inclusive.",
    "You know, nothing rhymes with orange.  I feel like syringe could make a little effort to be more inclusive.",
    "You know, nothing rhymes with orange.  I feel like syringe could make a little effort to be more inclusive.",
    "You know, nothing rhymes with orange.  I feel like syringe could make a little effort to be more inclusive.",
    "You know, nothing rhymes with orange.  I feel like syringe could make a little effort to be more inclusive.",
    "You know, nothing rhymes with orange.  I feel like syringe could make a little effort to be more inclusive.",
    "You know, nothing rhymes with orange.  I feel like syringe could make a little effort to be more inclusive.",
    "You know, nothing rhymes with orange.  I feel like syringe could make a little effort to be more inclusive.",
    "You know, nothing rhymes with orange.  I feel like syringe could make a little effort to be more inclusive.",
    "You know, nothing rhymes with orange.  I feel like syringe could make a little effort to be more inclusive."
  ];
  wrench = [
    "One in ten, one in ten, one in ten.",
    "One in ten, one in ten, one in ten.",
    "One in ten, one in ten, one in ten.",
    "One in ten, one in ten, one in ten.",
    "One in ten, one in ten, one in ten.",
    "One in ten, one in ten, one in ten.",
    "One in ten, one in ten, one in ten.",
    "One in ten, one in ten, one in ten.",
    "One in ten, one in ten, one in ten.",
    "One in ten, one in ten, one in ten.",
    "One in ten, one in ten, one in ten."
  ];

  dialogue = [this.cook, this.doctor, this.handyman, this.merchant, this.ranger,
  this.candlestick, this.dagger, this.kitchenKnife, this.pipe, this.syringe, this.wrench];
}
