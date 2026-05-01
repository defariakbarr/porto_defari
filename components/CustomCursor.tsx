"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;
        if (!cursor || !follower) return;

        let mouseX = 0;
        let mouseY = 0;
        let followerX = 0;
        let followerY = 0;

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;
        };

        const animate = () => {
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            follower.style.left = `${followerX}px`;
            follower.style.top = `${followerY}px`;
            requestAnimationFrame(animate);
        };

        const onMouseEnterLink = () => {
            cursor.style.transform = "translate(-50%, -50%) scale(0)";
            follower.style.width = "50px";
            follower.style.height = "50px";
            follower.style.borderColor = "rgba(139, 92, 246, 0.8)";
        };

        const onMouseLeaveLink = () => {
            cursor.style.transform = "translate(-50%, -50%) scale(1)";
            follower.style.width = "36px";
            follower.style.height = "36px";
            follower.style.borderColor = "rgba(59, 130, 246, 0.5)";
        };

        document.addEventListener("mousemove", onMouseMove);
        animate();

        const links = document.querySelectorAll("a, button, [role=button]");
        links.forEach((el) => {
            el.addEventListener("mouseenter", onMouseEnterLink);
            el.addEventListener("mouseleave", onMouseLeaveLink);
        });

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="custom-cursor" />
            <div ref={followerRef} className="custom-cursor-follower" />
        </>
    );
}
