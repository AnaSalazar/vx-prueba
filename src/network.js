import React from "react";
import { LinearGradient } from "@vx/gradient";
import { Group } from "@vx/group";
import { Graph, DefaultNode, DefaultLink } from "@vx/network";
import { LinkHorizontal, LinkHorizontalStep } from "@vx/shape";

const nodes = [
  {
    x: 50,
    y: 300,
    depth: 0
  },
  {
    x: 150,
    y: 300,
    text: "Trivia"
  },
  {
    x: 250,
    y: 300,
    text: "Cipher"
  },
  {
    x: 350,
    y: 300,
    text: "Data Dashboard"
  },
  {
    x: 450,
    y: 300,
    text: "Social Network"
  },
  {
    x: 500,
    y: 300,
    depth: 1
  },
  {
    x: 550,
    y: 50,
    text: "Burger Queen"
  },
  {
    x: 550,
    y: 120,
    text: "Markdown"
  },
  {
    x: 550,
    y: 400,
    text: "Marketplace"
  },
  {
    x: 550,
    y: 470,
    text: "Redesign"
  },
  {
    x: 550,
    y: 540,
    text: "Capstone"
  }
];

const data = {
  nodes,
  links: [
    { source: nodes[0], target: nodes[1] },
    { source: nodes[1], target: nodes[2] },
    { source: nodes[2], target: nodes[3] },
    { source: nodes[3], target: nodes[4] },
    { source: nodes[4], target: nodes[5] },
    { source: nodes[5], target: nodes[6], linkType: "step" },
    { source: nodes[5], target: nodes[7], linkType: "step" },
    { source: nodes[5], target: nodes[8], linkType: "step" },
    { source: nodes[8], target: nodes[9] },
    { source: nodes[9], target: nodes[10] }
  ]
};

const Node = ({ node }) => {
  return (
    <Group>
      {node.depth === 0 ? (
        <circle r={15} fill="#FFE521" />
      ) : node.depth === 1 ? (
        <circle r={10} fill="#FF0021" />
      ) : (
        <circle r={30} fill="#E5E5E5" />
      )}
      {node.text && (
        <text
          dy={".33em"}
          fontSize={10}
          fontFamily="Arial"
          textAnchor={"middle"}
          style={{ pointerEvents: "none" }}
          fill={node.depth === 0 ? "#FF0000" : "#000"}
        >
          {node.text}
        </text>
      )}
    </Group>
  );
};

const Link = ({ link }) => {
  if (link.linkType && link.linkType === "step") {
    return (
      <LinkHorizontalStep
        data={link}
        stroke="#374469"
        strokeWidth="1"
        fill="none"
        percent={0.5}
      />
    );
  }

  return <DefaultLink link={link} />;
};

const Network = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <LinearGradient id="lg" from="#fd9b93" to="#fe6e9e" />
      <rect width={width} height={height} rx={14} fill="#272b4d" />
      <Graph graph={data} nodeComponent={Node} linkComponent={Link} />
    </svg>
  );
};

export default Network;
