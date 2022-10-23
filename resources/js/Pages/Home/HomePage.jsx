import {
    Animator,
    batch,
    Fade, FadeIn,
    MoveIn,
    MoveOut,
    ScrollContainer,
    ScrollPage,
} from "react-scroll-motion";
import {Link} from "@inertiajs/inertia-react";


export default function HomePage(props) {

    return (
        <div
            className="font-sans relative justify-center min-h-screen w-screen sm:items-center sm:pt-0 bg-no-repeat bg-cover"
            style={{backgroundImage: `url(/assets/images/cover2.jpg)`}}>
            <ScrollContainer>
                <ScrollPage page={0}>
                    <div className="flex flex-col h-full justify-items-center items-center mt-40">
                      <span className="text-6xl sm:text-8xl font-semibold text-white">
                        <Animator animation={batch(Fade(), MoveOut(0, -200))}>People Will,</Animator>
                        <div className="flex">
                            <Animator animation={batch(Fade(), MoveOut(-1000, 0))}>Have ️</Animator>
                            <Animator animation={batch(Fade(), MoveOut(1000, 0))}>to be️</Animator>
                        </div>
                      </span>
                    </div>

                </ScrollPage>
                <ScrollPage page={1}>
                    <div className="flex flex-col h-full justify-items-center items-center mt-40 w-full">
                      <span className="text-6xl sm:text-8xl font-semibold">
                          <div className="flex flex-col h-full justify-items-center items-center">
                              <div className="">
                                  <Animator animation={batch(Fade(), MoveIn(-2000, 0))}>Beyond of️</Animator>
                              </div>
                              <div className="">
                                  <Animator animation={batch(Fade(), MoveIn(2000, 0))}>The Government,️</Animator>
                              </div>
                        </div>
                      </span>
                    </div>
                </ScrollPage>
                <ScrollPage page={2}>
                    <div className="flex flex-col h-full justify-items-center items-center mt-40 w-full">
                      <span className="text-6xl sm:text-8xl font-semibold text-white sm:text-black">
                        <Animator animation={batch(Fade(), MoveIn(0, 1000))}>Make it! 💛</Animator>
                        <Animator animation={batch(FadeIn())}>
                            <div className="w-full justify-items-center items-center">
                                <Link>
                                    Click
                                </Link>
                            </div>
                        </Animator>
                      </span>
                    </div>
                </ScrollPage>
            </ScrollContainer>
        </div>
    );
}
