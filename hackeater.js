var paragraphs = document.getElementsByTagName("p");
[...paragraphs].forEach((e) => replaceText(e))

function replaceText(p) {
    p.innerHTML = p.innerHTML.replace(/hacker/g, 'death eater');
    p.innerHTML = p.innerHTML.replace(/hack/g, 'avada kedavra');
    p.innerHTML = p.innerHTML.replace(/hacked/g, 'death ate');
    p.innerHTML = p.innerHTML.replace(/hacking/g, 'muggle terrorizing');
    p.innerHTML = p.innerHTML.replace(/black hat/g, 'follower of H3-Wh0-Must-N0t-B3-N4M3D');
    p.innerHTML = p.innerHTML.replace(/grey hat/g, 'dark wizard');
    p.innerHTML = p.innerHTML.replace(/white hat/g, 'light wizard');
    p.innerHTML = p.innerHTML.replace(/cracker/g, 'first year');
    p.innerHTML = p.innerHTML.replace(/computer/g, 'dark arts');
    p.innerHTML = p.innerHTML.replace(/programmer/g, 'wizard');
    p.innerHTML = p.innerHTML.replace(/programming/g, 'magic');
    p.innerHTML = p.innerHTML.replace(/bug/g, 'curse');
    p.innerHTML = p.innerHTML.replace(/exploit/g, 'jinx');
    p.innerHTML = p.innerHTML.replace(/script/g, 'spell');
    p.innerHTML = p.innerHTML.replace(/code/g, 'magic');

    p.innerHTML = p.innerHTML.replace(/Richard Stallman/g, 'Voldemort');
    p.innerHTML = p.innerHTML.replace(/Linus Torvalds/g, 'Voldemort');
}