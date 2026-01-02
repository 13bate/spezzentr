import clsx from "clsx";
import { useEffect, useState } from "react";
import { supabase } from "../../services/supabaseClient";
import style from "./NewSideBar.module.scss";

interface Props {
  className?: string;
}

export const SideBar: React.FC<Props> = ({ className }) => {
  const [newsPosts, setNewsPosts] = useState(Array);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("newsposts")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error) setNewsPosts(data);
    };
    fetchPosts();
  }, []);
  console.log(newsPosts);
  return <div className={clsx(className, `${style.NavBar}`)}></div>;
}
