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
import SimpleModal from "@/Components/SimpleModal";


export default function HomePage(props) {

    const siteExplanation = () => {
        return <SimpleModal
            openButton={<button className="hover:text-blue-700">Click!</button>}
            modalTitle="What is this website stand for?"
            hideSaveButton={true}
            modalBody={<div>
                <p>
                    Let us start with an live example what we have in Switzerland.
                </p>
                <p>
                    Switzerland is perhaps best known for its system of democracy. Known as "direct" democracy, it’s a
                    legal framework that enables all Swiss citizens over the age of 18 to vote on how the country is
                    run.
                    The fundamental principle of direct democracy is that all citizens take part in decision-making and
                    there’s a strong respect for minorities.
                </p>
                <p>
                    There are three instruments of direct democracy, all types of referendum: mandatory, popular
                    initiative and optional. A vote must be held on any amendment to the constitution resulting in a
                    mandatory referendum. A double majority, meaning the consent of a majority of the people and of the
                    cantons is required to amend the country’s constitution.
                </p>

                <p>
                    Citizens can launch a popular initiative to demand a change to the constitution. Any Swiss citizen
                    who is eligible to vote can sign a popular initiative and a group of at least seven citizens (the
                    initiative committee) can launch their own popular initiative. Before a vote is held on a popular
                    initiative, the initiative committee must collect 100,000 valid signatures in favour of the proposal
                    within a period of 18 months.
                </p>
                <p>
                    The Federal Council and Parliament will recommend whether the proposal should be accepted or
                    rejected. For the proposal to be accepted a double majority is needed. If it is accepted, new
                    legislation or an amendment to existing legislation is normally required to implement the new
                    constitutional provision.
                </p>
                <p>
                    While parliament passes new legislation and amendments to existing legislation, citizens can call
                    for a referendum on new laws and against certain international treaties. This right to request an
                    optional referendum is an important element in Swiss direct democracy.
                </p>
                <br/>
                <p>
                    <h4 className="font-bold">In the new world,</h4> whenever we are talking about humanity and conversation between governments and their people, there is no place for gun and violence!
                </p>
                <p>
                    People must be able to choose their way even if it is wrong.
                    Governments should know that people can even change the whole system at any time without any violent action.
                    On the other hand, people can trust to their government and correct them if needed
                </p>
            </div>}
        />
    }

    return (
        <div
            className="font-sans relative justify-center min-h-screen w-screen sm:items-center sm:pt-0 bg-no-repeat bg-cover"
            style={{backgroundImage: `url(/assets/images/cover2.jpg)`}}>
            <ScrollContainer>
                <ScrollPage page={0}>
                    <div className="flex flex-col h-full justify-items-center items-center mt-40">
                      <span className="text-6xl sm:text-8xl font-semibold text-white">
                          <Animator animation={batch(Fade())}>
                              <small className="text-2xl">What is this website stand for?&nbsp;
                                  {siteExplanation()}
                              </small>
                          </Animator>
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
