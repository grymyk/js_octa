function Draw(sk) {
    sk.background(250);
    sk.rotateY(sk.frameCount * 0.01);

    for (let j = 0; j < 5; j++) {
        sk.push();

        for (let i = 0; i < 80; i++) {
            sk.translate(
                sk.sin(sk.frameCount * 0.001 + j) * 100,
                sk.sin(sk.frameCount * 0.001 + j) * 100,
                i * 0.1
            );

            sk.rotateZ(sk.frameCount * 0.002);
            sk.push();
            sk.box(8, 6, 4);
            sk.pop();
        }

        sk.pop();
    }
}

export default Draw;
