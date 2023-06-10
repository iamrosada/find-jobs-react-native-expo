import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "./popularjobs.style";
import { COLOR, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { isLoaded } from "expo-font";

const Popularjobs = () => {
  const router = useRouter();
  let isLoaded = false;
  let error = false;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoaded ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          renderItem={(item)=>(
             <PopularJobCard 
             item={item}
             />
          
          )

          }
          keyExtractor={item=> item?.job_id}
          contentContainerStyle={{columnGap:SIZES.medium}}
          horizontal
          
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
