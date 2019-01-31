import React from 'react';

const TypoGraphy = (props)=>{
    return <div className="animated fadeIn">
    <div className="ui-typography">
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <strong className="card-title" v-if="headerText">Typography</strong>
                    </div>
                    <div className="card-body">
                        <div className="typo-headers">
                            <h1 className="pb-2 display-4">Very Important Information H1</h1>
                            <h2 className="pb-2 display-5">Sections &amp; Modal Names H2</h2>
                            <h3 className="pb-2 display-5">Articles &amp; Block Headings H3</h3>
                            <h4 className="pb-2 display-5">Random Tiny Heading H4</h4>
                            <h5 className="pb-2 display-5">Random Tiny Heading H5</h5>
                            <h6 className="pb-4 display-5">Random Tiny Heading H6</h6>
                        </div>
                        <div className="typo-articles">
                            <p>
                                The unique stripes of zebras make them one of the animals most familiar to people.
                                They occur in a variety of habitats, such as grasslands, savannas,
                                <span className="bg-flat-color-1 text-light">woodlands</span>, thorny scrublands,
                                <span className="clickable-text">mountains</span>
                                , and coastal hills. However, various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins and habitat destruction. Grévy's zebra and the mountain <mark>highlighted text</mark>
                                zebra are endangered.</p>
                            <blockquote className="blockquote mt-3 text-right">
                                <p>
                                    Blockquotes. However, various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins. </p>
                                <footer className="blockquote-footer">Jefferey Lebowski</footer>
                            </blockquote>
                            <p>
                                lthough zebra species may have overlapping ranges, they do not interbreed.
                                In captivity, plains zebras have been crossed with mountain zebras. The hybrid foals
                                <span className="bg-flat-color-1 text-light">selected text</span> lacked a dewlap and resembled their
                            </p>
                        </div>
                        <div className="vue-lists">
                            <h2 className="mb-4">Lists</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <h3>Unordered</h3>
                                    <ul>
                                        <li>
                                            A wide variety of hypotheses have been proposed to account for the evolution of the striking stripes of zebras.
                                        </li>
                                        <li>The more traditional of these (1 and 2, below) relate to camouflage.</li>
                                        <li>The vertical striping may help the zebra hide in the grass by disrupting its outline.</li>
                                        <li>
                                            In addition, even at moderate distances, the striking striping merges to an apparent grey.
                                            <ul className="vue-list-inner">
                                                <li>However, the camouflage has been contested with arguments that most of a zebra's predator.</li>
                                                <li>Such as lions and hyenas cannot see well at a distance.</li>
                                                <li>More likely to have smelled or heard a zebra.</li>
                                            </ul>
                                        </li>
                                        <li>Before seeing it from a distance, especially at night.</li>
                                    </ul>
                                </div>
                                <div className="col-md-6 text-left">
                                    <div>
                                        <h3>Ordered</h3>
                                        <ol className="vue-ordered">
                                            <li>
                                                A wide variety of hypotheses have been proposed to account for the evolution of the striking stripes of zebras.
                                            </li>
                                            <li>The more traditional of these (1 and 2, below) relate to camouflage.</li>
                                            <li>The vertical striping may help the zebra hide in the grass by disrupting its outline.</li>
                                            <li>
                                                In addition, even at moderate distances, the striking striping merges to an apparent grey.
                                                <ul className="vue-list-inner">
                                                    <li>However, the camouflage has been contested with arguments that most of a zebra's predator.
                                                    </li>
                                                    <li>Such as lions and hyenas cannot see well at a distance.</li>
                                                    <li>More likely to have smelled or heard a zebra.</li>
                                                </ul>
                                            </li>
                                            <li>Before seeing it from a distance, especially at night.</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="vue-misc">
                            <h2 className="display-5 my-3">Misc</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <h3>Address</h3>
                                    <address className="mt-3">
                                        <strong>SJØNNA</strong><br/>
                                        Nezalezhnasti Ave, 13 - 28A<br/>
                                        Minsk, Belarus, 220141<br/>
                                        +375 29 319-53-98<br/>
                                        <br/>
                                        <b>Vasili Savitski</b><br/>
                                        <a href="mailto">hello@examplemail.com</a>
                                    </address>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-3">Well</h3>
                                    <div className="jumbotron">
                                        Zebras have excellent eyesight. It is believed that they can see in color. Like most ungulates, the zebra's eyes are on the sides of its head, giving it a wide field of view.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
}

export default TypoGraphy;