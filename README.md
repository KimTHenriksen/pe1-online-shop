# pe1-online-shop

Project Exam 1 - Online Shop

## About

This is my Online Shop project for Exam project 1.

## Technologies

HTML
CSS
JavaScript
Noroff API

## Links

[Online Shop Website](https://kimthenriksen.github.io/pe1-online-shop/)
[Figma Desktop Prototype](https://www.figma.com/proto/rCFoR4QNOFq6Zf82ZVgZKL/PE1-Online-Shop---Kim-T-Henriksen?node-id=70-888&t=VBx2y5gF1Bjnfdhr-1)
[Figma Mobile Prototype](https://www.figma.com/proto/rCFoR4QNOFq6Zf82ZVgZKL/PE1-Online-Shop---Kim-T-Henriksen?node-id=41-1318&t=VBx2y5gF1Bjnfdhr-1)
[GitHub Project Board](https://github.com/users/KimTHenriksen/projects/4)

## Test account for login

Email: kimtest@stud.noroff.no
Password: 12345678

## AI usage

I used AI for debugging in these two examples:

cart.js
The loading message was showing when the cart was empty. AI helped me understand that I needed to add an if statement to check if the cart was empty.
When I realised what I had missed, I added:

if (cart.length === 0) {
cartItems.textContent = "Your cart is empty.";
cartSummary.style.display = "none";
}

checkout.js
The styling on my checkout page was not working. AI helped med find that I hade used the wrong selector in my CSS.
When I realised what I had missed, I changed:

from: .payment-form
to: #payment-form

I tested it and the styling worked.
