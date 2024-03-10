import Link from "next/link";
import InfoBox from "./InfoBox";

export default function InfoBoxes() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Demo of styles</h2>
        <div className="prose">
          <p>
            Here’s a list of several info-boxes to showcase how that kind of
            model and content would display in the site:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
          <InfoBox>
            <h3>First InfoBox</h3>
            <p>
              This is a sample line of text in an info-box to showcase its
              features.
            </p>
            <p>
              <Link className="hover:text-pink-700" href="/">
                Go to page &gt;
              </Link>
            </p>
          </InfoBox>
          <InfoBox>
            <h3>Second InfoBox</h3>
            <p>
              This is a sample line of text in an info-box to showcase its
              features. This box has a <em>little</em> more text to showcase
              what it looks like.
            </p>
            <p>
              <Link className="hover:text-pink-700" href="/">
                Go to page &gt;
              </Link>
            </p>
          </InfoBox>
          <InfoBox>
            <h3>Third InfoBox</h3>
            <p>
              This is a sample line of text in an info-box to showcase its
              features.
            </p>
            <p>
              <Link className="hover:text-pink-700" href="/">
                Go to page &gt;
              </Link>
            </p>
          </InfoBox>
          <InfoBox>
            <h3>InfoBox number 4</h3>
            <p>
              This is a sample line of text in an info-box to showcase its
              features.
            </p>
            <p>
              <Link className="hover:text-pink-700" href="/">
                Go to page &gt;
              </Link>
            </p>
          </InfoBox>
          <InfoBox>
            <h3>Final box with long title to display how it looks</h3>
            <p>
              This is a sample line of text in an info-box to showcase its
              features.
            </p>
            <p>
              <Link className="hover:text-pink-700" href="/">
                Go to page &gt;
              </Link>
            </p>
          </InfoBox>
        </div>
        <div className="prose">
          <p>This is a footnote below that list of info-boxes.</p>
        </div>
      </div>
    </div>
  );
}
