import React, { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { DialogOverlay, DialogContent } from '@reach/dialog';

export default function ContactButton() {
  const [showDialog, setShowDialog] = useState(false);
  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);

  const modalTransitions = useTransition(showDialog, null, {
    from: {
      opacity: 0,
      y: -10,
    },
    enter: {
      opacity: 1,
      y: 0,
    },
    leave: {
      opacity: 0,
      y: 10,
    },
  });

  const AnimatedDialogOverlay = animated(DialogOverlay);
  const AnimatedDialogContent = animated(DialogContent);

  return (
    <span className="absolute inset-x-0 bottom-0 z-10 inline-flex justify-center transform translate-y-1/2 rounded-md shadow-sm">
      <button
        onClick={openDialog}
        type="button"
        className="inline-flex items-center px-4 py-2 text-base leading-6 text-teal-700 uppercase transition duration-150 ease-in-out bg-white border border-transparent rounded-md font-display hover:text-teal-600 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal active:text-teal-500"
      >
        <span className="hidden font-light sm:inline">
          For all enquiries&nbsp;
        </span>
        contact us today.
      </button>
      {modalTransitions.map(
        ({ item, key, props: styles }) =>
          item && (
            <AnimatedDialogOverlay
              key={key}
              isOpen={showDialog}
              onDismiss={closeDialog}
              style={{
                opacity: styles.opacity,
              }}
              className="fixed inset-0 z-50 flex w-full h-full overflow-auto bg-transparent-black-50 backdrop-blur"
            >
              <AnimatedDialogContent
                aria-label="Contact form"
                isOpen={showDialog}
                style={{
                  transform: styles.y.interpolate(
                    value => `translate3d(0px, ${value}px, 0px)`
                  ),
                }}
                className="relative flex-1 w-full max-w-lg mx-auto my-24 bg-white rounded outline-none"
              >
                <button
                  onClick={closeDialog}
                  type="button"
                  className="absolute top-0 right-0"
                >
                  <span className="sr-only">Close</span>
                  <span aria-hidden>×</span>
                </button>
                <h2 className="font-bold text-center text-teal-600 font-display">
                  We will be in contact shortly.
                </h2>
              </AnimatedDialogContent>
            </AnimatedDialogOverlay>
          )
      )}
    </span>
  );
}
