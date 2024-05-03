/* eslint-disable react/jsx-key */
'use client'
import React from "react";
import  { useEffect, useState } from 'react'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { StepItem, Stepper, useStepper } from "@/components/stepper";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { RefObject, forwardRef, useId, useRef } from "react";
import { Hash, Mic, ShieldAlert, ShieldCheck, VideoIcon } from 'lucide-react';
import ImageCard from '@/components/imageCard'
import { ChevronsUpDown } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Play } from 'lucide-react';

import { UsersRound } from 'lucide-react';


import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { Switch } from '@/components/ui/switch'



// ImageCard Component
const ImageCard2 = () => {
  return (
      <div>
<ImageCard imageUrl="https://hips.hearstapps.com/hmg-prod/images/flowers-trees-and-bushes-reach-their-peak-of-full-bloom-in-news-photo-1678292967.jpg?resize=300:*">
  Image
</ImageCard>      </div>
  );
}

// Collapsible Component
const Collapsible2 = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
      <div>
<Collapsible
  open={isOpen}
  onOpenChange={setIsOpen}
  className="w-[350px] space-y-2"
>
  <div className="rounded-base flex items-center justify-between space-x-4 border-2 border-black bg-main px-4 py-2">
    <h4 className="text-sm font-bold">@peduarte starred 3 repositories</h4>
    <CollapsibleTrigger asChild>
      <Button variant="outline" size="sm" className="w-9 p-0">
        <ChevronsUpDown className="h-4 w-4" />
        <span className="sr-only">Toggle</span>
      </Button>
    </CollapsibleTrigger>
  </div>
  <div className="rounded-base border-2 border-black bg-main px-4 py-3 font-mono font-base text-sm">
    @radix-ui/primitives
  </div>
  <CollapsibleContent className="space-y-2 font-base">
    <div className="rounded-base border-2 border-black bg-main px-4 py-3 font-mono text-sm">
      @radix-ui/colors
    </div>
    <div className="rounded-base border-2 border-black bg-main px-4 py-3 font-mono text-sm">
      @stitches/react
    </div>
  </CollapsibleContent>
</Collapsible>      </div>
  );
}

// Card Component
const Card2 = () => {
  return (
      <div>
<Card className="w-[350px]">


  <CardContent>
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Name of your project" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="framework">Framework</Label>
          <Select>
            <SelectTrigger className="bg-white" id="framework">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="next">Next.js</SelectItem>
              <SelectItem value="sveltekit">SvelteKit</SelectItem>
              <SelectItem value="astro">Astro</SelectItem>
              <SelectItem value="nuxt">Nuxt.js</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </form>
  </CardContent>
  <CardFooter>

  <div className="flex justify-between">
    <Button variant="outline" >Cancel</Button>
    <Button variant="outline" >Deploy</Button>
  </div>
  </CardFooter>

</Card>      </div>
  );
}

// Switch Component
const Switch2 = ({}) => {
  return (
      <div>
          {/* Implement your switch component here */}
          <div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>
      </div>
  );
}

// Tabs Component
const Tabs2 = ({ }) => {
  return (
      <div>
       <Tabs defaultValue="account" className="w-[400px]">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <Card>
      <CardHeader>
        <CardTitle>Account</CardTitle>
        <CardDescription>
          Make changes to your account here. Click save when youre done.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue="Pedro Duarte" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="username">Username</Label>
          <Input id="username" defaultValue="@peduarte" />
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" >Save changes</Button>
      </CardFooter>
    </Card>
  </TabsContent>
  <TabsContent value="password">
    <Card>
      <CardHeader>
        <CardTitle>Password</CardTitle>
        <CardDescription>
          Change your password here. After saving, youll be logged out.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="current">Current password</Label>
          <Input id="current" type="password" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="new">New password</Label>
          <Input id="new" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-white">Save password</Button>
      </CardFooter>
    </Card>
  </TabsContent>
</Tabs>
      </div>
  );
}

function FinalStep() {
  const { hasCompletedAllSteps, resetSteps } = useStepper();

  if (!hasCompletedAllSteps) {
      return null;
  }

  return (
      <>
          <div className="h-40 flex items-center justify-center border bg-secondary text-primary rounded-md">
              <h1 className="text-xl">Woohoo! All steps completed! 🎉</h1>
          </div>
          <div className="w-full flex justify-end gap-2">
              <Button variant="outline" size="sm" onClick={resetSteps}>
                  Reset
              </Button>
          </div>
      </>
  );
}

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement>; // Container ref
  fromRef: RefObject<HTMLElement>;
  toRef: RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false, // Include the reverse prop
  duration = Math.random() * 30 + 5,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  // Calculate the gradient coordinates based on the reverse prop
  const gradientCoordinates = reverse
    ? {
        x1: ["90%", "-10%"],
        x2: ["100%", "0%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      }
    : {
        x1: ["10%", "110%"],
        x2: ["0%", "100%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      };

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        const startX =
          rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY =
          rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX =
          rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY =
          rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${
          (startX + endX) / 2
        },${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };

    // Initialize ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      // For all entries, recalculate the path
      for (let entry of entries) {
        updatePath();
      }
    });

    // Observe the container element
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Call the updatePath initially to set the initial path
    updatePath();

    // Clean up the observer on component unmount
    return () => {
      resizeObserver.disconnect();
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
        className,
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits={"userSpaceOnUse"}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1], // https://easings.net/#easeOutExpo
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
          <stop stopColor={gradientStartColor}></stop>
          <stop offset="32.5%" stopColor={gradientStopColor}></stop>
          <stop
            offset="100%"
            stopColor={gradientStopColor}
            stopOpacity="0"
          ></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};



// eslint-disable-next-line react/display-name
const Circle = forwardRef<HTMLDivElement, { 
  className?: string; 
  children?: React.ReactNode; 
  active?: boolean;
  onClick?: () => void; // Add onClick prop definition
}>(({ className, children, active, onClick }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 mt-4 items-center justify-center rounded-full border-2 border-border bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
        active && "transform scale-150",
      )}
      onClick={onClick} // Pass onClick prop to the div element
    >
      {children}
    </div>
  );
});

function AnimatedBeamMultipleInputDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Define an object mapping step labels to icons
  const stepIcons: Record<string, React.ReactNode> = {
    "Step 1": <Hash className="h-6 w-6" />,
    "Step 2": <Mic className="h-6 w-6" />,
    "Step 3": <ShieldAlert className="h-6 w-6" />,
    "Step 4": <ShieldCheck className="h-6 w-6" />,
    "Step 5": <VideoIcon className="h-6 w-6" />,
    "Step 6": <Icons.user className="h-6 w-6" />,
  };
  const steps: StepItem[] = [
    { label: "Step 1", component: <Card2 /> },
    { label: "Step 2", component: <Card2 /> },
    { label: "Step 3", component: <Card2 /> },
    { label: "Step 4", component: <Card2 /> },
    { label: "Step 5", component: <Card2 /> },
    { label: "Step 6", component: <Card2/> },
  ];

  const stepRefs: React.RefObject<HTMLDivElement>[][] = Array.from({ length: steps.length + 1 }, () =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Array.from({ length: 2 }, () => useRef<HTMLDivElement>(null))
  );

  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
  };

  const handleNextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <Stepper orientation="vertical" initialStep={0} steps={steps} containerRef={containerRef}>
      {/* Back and Next Buttons */}
      <div className="flex justify-between mt-4">
        <Button variant="outline" size="lg" onClick={handlePrevStep} disabled={activeStep === 0}>
          Back
        </Button>
        <Button variant="outline" size="lg" onClick={handleNextStep} disabled={activeStep === steps.length - 1}>
          Next
        </Button>
      </div>
      <div className="min-h-screen relative lg:mt-16 flex w-full items-center justify-center p-4" ref={containerRef}>
        <div className="pl-8 ml-8 border rounded-lg flex h-full w-full flex-row items-stretch justify-between gap-10">
          <div className="flex flex-col justify-center gap-2">
            {steps.map((step, index) => (
              <React.Fragment key={step.label}>
                <Circle
                  ref={stepRefs[index][0]}
                  active={index === activeStep}
                  onClick={() => handleStepClick(index)}
                >
                  <div className="flex items-center">
                    {step.label && stepIcons[step.label]}
                  </div>
                </Circle>
                {index === activeStep && (
                  <div className="z-50 absolute top-0 lg:top-5 right-5 lg:transform -translate-x-1/2 -translate-y-1/2 border rounded-lg p-4">

                    {step.component}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex flex-col justify-center">
            <Circle ref={stepRefs[steps.length][1]} className="h-16 w-16">
              <Play className="h-6 w-6" />
            </Circle>
          </div>
          <div className="flex flex-col justify-center">
            <Circle
              ref={stepRefs[steps.length][0]}
              active={activeStep === steps.length}
              onClick={() => setActiveStep(steps.length)}
            >
              <UsersRound className="text-black" />
            </Circle>
          </div>
        </div>
        <FinalStep />

        {/* AnimatedBeams */}
        {stepRefs.map((stepRef, index) => {
          const [fromRef, toRef] = stepRef;
          if (index === activeStep) {
            return (
              <AnimatedBeam
                key={index}
                containerRef={containerRef}
                fromRef={fromRef}
                toRef={stepRefs[steps.length][1]} // Connect to the Play icon
              />
            );
          } else if (index === steps.length) {
            return (
              <AnimatedBeam
                key={index}
                containerRef={containerRef}
                fromRef={fromRef}
                toRef={stepRefs[steps.length][1]} // Connect all div refs to the Play icon
              />
            );
          } else {
            return (
              <AnimatedBeam
                key={index}
                containerRef={containerRef}
                fromRef={fromRef}
                toRef={toRef}
              />
            );
          }
        })}
      </div>
    </Stepper>
  );
}



type Props = {}


const EditorCanvas = (props: Props) => {
 
  
  return (
    <ResizablePanelGroup direction="horizontal">
     <ResizablePanel defaultSize={70}>
        <div className="flex h-full items-center justify-center">
          <div
            style={{ width: '100%', height: '100%', paddingBottom: '70px' }}
            className="relative"
          >
                          <AnimatedBeamMultipleInputDemo/>

          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
    <ResizablePanel
        defaultSize={40}
        className="relative sm:block"
      >  
      </ResizablePanel> 

    </ResizablePanelGroup>
  )
}

export default EditorCanvas