type SVG_PROPS = {
  width: number | string;
  height: number | string;
  color: string;
  class: string;
};

export function Shopping(props: SVG_PROPS) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      className={props.class}
      viewBox="0 0 24 24"
    >
      <path
        fill={props.color}
        d="M22.713 4.077A2.993 2.993 0 0020.41 3H4.242L4.2 2.649A3 3 0 001.222 0H1a1 1 0 000 2h.222a1 1 0 01.993.883l1.376 11.7A5 5 0 008.557 19H19a1 1 0 000-2H8.557a3 3 0 01-2.82-2h11.92a5 5 0 004.921-4.113l.785-4.354a2.994 2.994 0 00-.65-2.456zM21.4 6.178l-.786 4.354A3 3 0 0117.657 13H5.419l-.941-8H20.41a1 1 0 01.99 1.178z"
      ></path>
      <circle fill={props.color} cx="7" cy="22" r="2"></circle>
      <circle fill={props.color} cx="17" cy="22" r="2"></circle>
    </svg>
  );
}

export function Envelope(props: SVG_PROPS) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      className={props.class}
      viewBox="0 0 24 24"
    >
      <path
        fill={props.color}
        d="M19 1H5a5.006 5.006 0 00-5 5v12a5.006 5.006 0 005 5h14a5.006 5.006 0 005-5V6a5.006 5.006 0 00-5-5zM5 3h14a3 3 0 012.78 1.887l-7.658 7.659a3.007 3.007 0 01-4.244 0L2.22 4.887A3 3 0 015 3zm14 18H5a3 3 0 01-3-3V7.5l6.464 6.46a5.007 5.007 0 007.072 0L22 7.5V18a3 3 0 01-3 3z"
      ></path>
    </svg>
  );
}

export function Heart(props: SVG_PROPS) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      className={props.class}
      viewBox="0 0 24 24"
    >
      <path
        fill={props.color}
        d="M17.5 1.917a6.4 6.4 0 00-5.5 3.3 6.4 6.4 0 00-5.5-3.3A6.8 6.8 0 000 8.967c0 4.547 4.786 9.513 8.8 12.88a4.974 4.974 0 006.4 0c4.014-3.367 8.8-8.333 8.8-12.88a6.8 6.8 0 00-6.5-7.05zm-3.585 18.4a2.973 2.973 0 01-3.83 0C4.947 16.006 2 11.87 2 8.967a4.8 4.8 0 014.5-5.05 4.8 4.8 0 014.5 5.05 1 1 0 002 0 4.8 4.8 0 014.5-5.05 4.8 4.8 0 014.5 5.05c0 2.903-2.947 7.039-8.085 11.346z"
      ></path>
    </svg>
  );
}

export function Search(props: SVG_PROPS) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      className={props.class}
      viewBox="0 0 24 24"
    >
      <path
        fill={props.color}
        d="M23.707 22.293l-5.969-5.969a10.016 10.016 0 10-1.414 1.414l5.969 5.969a1 1 0 001.414-1.414zM10 18a8 8 0 118-8 8.009 8.009 0 01-8 8z"
      ></path>
    </svg>
  );
}

export function ArrowDown(props: SVG_PROPS) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      className={props.class}
      viewBox="0 0 24 24"
    >
      <path
        fill={props.color}
        d="M18.71 8.21a1 1 0 00-1.42 0l-4.58 4.58a1 1 0 01-1.42 0L6.71 8.21a1 1 0 00-1.42 0 1 1 0 000 1.41l4.59 4.59a3 3 0 004.24 0l4.59-4.59a1 1 0 000-1.41z"
      ></path>
    </svg>
  );
}

export function StuffedStar(props: SVG_PROPS) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      className={props.class}
      viewBox="0 0 24 24"
    >
      <path
        fill={props.color}
        d="M1.327 12.4l3.56 2.6-1.352 4.187A3.178 3.178 0 004.719 22.8a3.177 3.177 0 003.8-.019L12 20.219l3.482 2.559a3.227 3.227 0 004.983-3.591L19.113 15l3.56-2.6a3.227 3.227 0 00-1.9-5.832H16.4l-1.327-4.136a3.227 3.227 0 00-6.146 0L7.6 6.568H3.231a3.227 3.227 0 00-1.9 5.832z"
      ></path>
    </svg>
  );
}

export function EmptyStar(props: SVG_PROPS) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      className={props.class}
      viewBox="0 0 24 24"
    >
      <path
        fill={props.color}
        d="M23.836 8.794a3.179 3.179 0 00-3.067-2.226H16.4l-1.327-4.136a3.227 3.227 0 00-6.146 0L7.6 6.568H3.231a3.227 3.227 0 00-1.9 5.832L4.887 15l-1.352 4.187A3.178 3.178 0 004.719 22.8a3.177 3.177 0 003.8-.019L12 20.219l3.482 2.559a3.227 3.227 0 004.983-3.591L19.113 15l3.56-2.6a3.177 3.177 0 001.163-3.606zm-2.343 1.991l-4.144 3.029a1 1 0 00-.362 1.116l1.575 4.87a1.227 1.227 0 01-1.895 1.365l-4.075-3a1 1 0 00-1.184 0l-4.075 3a1.227 1.227 0 01-1.9-1.365l1.58-4.87a1 1 0 00-.362-1.116l-4.144-3.029a1.227 1.227 0 01.724-2.217h5.1a1 1 0 00.952-.694l1.55-4.831a1.227 1.227 0 012.336 0l1.55 4.831a1 1 0 00.952.694h5.1a1.227 1.227 0 01.724 2.217z"
      ></path>
    </svg>
  );
}
